import React, { useState, useEffect } from 'react'
import '../../../style/table.css'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { MdAddCircle, MdModeEdit, MdDelete } from 'react-icons/md'
import { Button } from 'react-bootstrap'
import DataModal from '../../../components/DataModal'
import SellerSearch from '../SellerSearch'
import PaginacionTabla from '../PaginacionTabla'

function ProductData(props) {
  const sid = props.match.params.sid
  const [modalShow, setModalShow] = useState(false)
  const [delUpdate, setDelUpdate] = useState(false)
  
  const [inputSearch, setInputSearch] = useState('')
  const [myData, setMydata] = useState([])
  const [wantDel, setwantDel] = useState(false)
  const [mapSid, setMapSid] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)

  
        // 設定頁碼
        const indexOfLastPost = currentPage * postsPerPage
        const indexOfFirstPost = indexOfLastPost - postsPerPage
        const currentorder = myData.slice(indexOfFirstPost, indexOfLastPost)
      
        const paginate = (pageNumber) => setCurrentPage(pageNumber)


  const getData = async () => {
    const res = await fetch('http://localhost:3000/product/ProductData', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const data = await res.json()

    setMydata(data)
  }

  const delData = async (sid) => {
    setDelUpdate(!delUpdate)
    const res = await fetch('http://localhost:3000/product/del/' + sid, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const data = [...(await res.json())]

    if (!data.sid) {
      const newProducts = data.filter((v, i) => {
        return v.sid !== sid
      })

      setMydata(newProducts)
    }
  }
  useEffect(() => {
    getData()
  }, [delUpdate,myData])


  const display = (

    
    <>

<div className="container">
        <h3>商品列表</h3>
       <hr />
      </div>
      <PaginacionTabla
            postsPerPage={postsPerPage}
            totalPosts={myData.length}
            paginate={paginate}
          />

      <table class="table table-striped   ">
        <thead>
          <tr class="title">
            <th scope="col" className="text-nowrap">
              流水號
            </th>
            <th scope="col" className="text-nowrap">
              產品名稱
            </th>
            <th scope="col" className="text-nowrap">
              定價
            </th>
            <th scope="col" className="text-nowrap">
              銷售價格
            </th>
            <th scope="col" className="text-nowrap">
              上架日期
            </th>
           
           
            <th scope="col" className="text-nowrap">
              追蹤人數
            </th>
            <th scope="col" className="text-nowrap">
              圖片src
            </th>
            <th scope="col" className="text-nowrap">
              銷售數量
            </th>
            <th scope="col" className="text-nowrap">
              分類
            </th>
            <th scope="col" className="text-nowrap ctrl">
              修改操作
            </th>
          </tr>
        </thead>
        <tbody>
          {currentorder.map((v, i) => {
            return (
              <tr key={v.sid}>
                <td width="15" className="sid">
                  {v.sid}
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
                <td>{v.Specialoffer}</td>
                <td>{moment(v.Addedtime).format('YYYY-MM-DD ')}</td>
               
                <td>{v.star}</td>
                <td>{v.awesome}</td>
                <td>
                  <img
                    style={
                      v.imgurl
                        ? {
                            height: '180px',
                            width: '160px',
                          }
                        : {}
                    }
                    src={v.imgurl}
                    alt=""
                  />
                </td>
                <td>{v.Selling}</td>
                <td>{v.category}</td>
                <td class="bu">
                  <Button
                    variant="primary block"
                    onClick={() => {
                      props.history.push('/ProductEdit/' + v.sid)
                    }}
                  >
                 
                    <MdModeEdit /> 編輯
                  </Button>
                  <DataModal
                    modalShow={modalShow}
                    setModalShow={setModalShow}
                    setwantDel={setwantDel}
                    delData={delData}
                    v={v}
                    myData={myData}
                    mapSid={mapSid}
                    setDelUpdate={setDelUpdate}
                    delUpdate={delUpdate}
                    
                  />
                  <Button
                    variant="danger block"
                    onClick={() => {
                      setModalShow(true)
                      setMapSid(v.sid)
                    }}
                  >
                    <MdDelete /> 刪除
                  </Button>{' '}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
  return (
    <>

          <div className="table">{display}</div>
    </>
  )
}
export default withRouter(ProductData)
