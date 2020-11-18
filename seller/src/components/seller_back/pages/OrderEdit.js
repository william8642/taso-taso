import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import '../../../style/login.css'
import '../../../style/55.css'


function OrderEdit(props) {
    const Order_id = props.match.params.Order_id
   
  
    // const [user, setUser] = useState({})
    const [dataLoading, setDataLoading] = useState(false)
    const [Mydata,setMydata] = useState('')

    const [Member_name,setMember_name] = useState('')
    const [Order_TotalPrice, setOrder_TotalPrice] = useState('')
    const [Order_CreatedTime, setOrder_CreatedTime] = useState('')
    const [Order_pay, setOrder_Pay] = useState('')
    const [Order_State, setOrder_State] = useState('')
    // let fd = null

    const [userDataIsExist, setUserDataIsExist] = useState(true)
    // useEffect(()=>{fd= new FormData(document.form1)},[])
    async function getUserFromServer(Order_id) {
        // 開啟載入指示
        setDataLoading(true)
    
        // 連接的伺服器資料網址
        const url = 'http://localhost:3000/seller/sellerOrder/'+ Order_id
    
        // 注意header資料格式要設定，伺服器才知道是json格式
        const request = new Request(url, {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'appliaction/json',
          }),
          
        })
    
        const response = await fetch(request)
        const data = await response.json()
        setMydata(data)
        console.log(data)
        //要詢問老師為甚麼一定要加data[0]才讀到資料
        setMember_name(data[0].Member_name)
        setOrder_TotalPrice(data[0].Order_TotalPrice)
        setOrder_CreatedTime(data[0].Order_CreatedTime)
        setOrder_Pay(data[0].Order_pay)
        setOrder_State(data[0].Order_State)

 
    
        // 如果從伺服器回傳的資料沒有id值
        if (!data.Order_id) {
          setUserDataIsExist(false)
          return
        }
      

        setMember_name(data.member_name)
        setOrder_TotalPrice(data.order_totalprice)
        setOrder_CreatedTime(data.order_createdtime)
        setOrder_Pay(data.order_pay)
        setOrder_State(data.order_state)


        
      }
      


    
      async function updateUserToSever() {

        // 開啟載入指示
        setDataLoading(true)
    
        const newData = { Member_name, Order_TotalPrice, Order_CreatedTime, Order_pay, Order_State}
    
        // 連接的伺服器資料網址
        const url = 'http://localhost:3000/seller/sellerOrder/:Order_id'
    
        // 注意資料格式要設定，伺服器才知道是json格式
        const request = new Request(url, {
          method: 'PUT',
          body: JSON.stringify(newData),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        })
    
       

        const response = await fetch(request)
        const data = await response.json()
   
        
    
        //直接在一段x秒關掉指示器
        setTimeout(() => {
          setDataLoading(false)
        }, 1000)

  
      }

        // 一開始就會開始載入資料
  useEffect(() => {
    getUserFromServer(Order_id)
  }, [])

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [])


  

  const sendData= async () => {
    
// const fd = new FormData(document.form1);
const newData = { 
  "member_name": Member_name, 
  "order_TotalPrice": Order_TotalPrice,
  "order_createdtime": Order_CreatedTime,
  "order_pay": Order_pay,
  "order_state": Order_State }
const fd = JSON.stringify(newData)
// console.log(fd)
// const fd = new FormData(formData);
const res = await fetch('http://localhost:3000/seller/OrderEdit/'+Order_id, {
  method: 'post',
  headers: new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
   
  }),
  body:fd
})

    const data = res.json()
    setMydata(data)
    // console.log(data)
    alert('修改成功')
    props.history.push('/Order')
  }





  
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="order_state">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
    <form className="form1 ">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">姓名</label>
          <input
            name = "Member_name"
            type="text"
            className="form-control"
            value={Member_name}
            onChange={(event) => {
              setMember_name(event.target.value)
              
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">價格</label>
          <input
            name = "Amount"
            type="text"
            className="form-control"
            value={Order_TotalPrice}
            onChange={(event) => {
              setOrder_TotalPrice(event.target.value)
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">日期</label>
          <input
            name = "Time"
            type="text"
            className="form-control"
            name-
            value={Order_CreatedTime}
            onChange={(event) => {
              setOrder_CreatedTime(event.target.value)
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">付款狀態</label>
          <select
            name = "ShippingMethods"
            type="text"
            className="form-control"
            value={Order_pay}
            onChange={(event) => {
              setOrder_Pay(event.target.value)
            }}
          >
           <option value="a10">信用卡尚未付款</option>
            <option value="a20">信用卡已付款</option>
            <option value="a30">超取轉帳尚未付款</option>
            <option value="a40">超取轉帳已付款</option>
            <option value="a50">超商取貨付款</option>
            <option value="e10">郵寄信用卡未付</option>
            <option value="e20">郵寄信用卡已付</option>
            <option value="e30">郵寄轉帳未付</option>
            <option value="e40">郵寄轉帳已付</option>
            
            </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">包裹狀態</label>
          <select
          className="form-control"
          value={Order_State}      
          onChange={(event) => {
          setOrder_State(event.target.value)
          }}
          >
            <option value="1">尚未付款</option>
            <option value="2">處理中</option>
            <option value="3">待收貨</option>
            <option value="4">已完成</option>
            <option value="5">已取消</option>
          </select>
        </div>
        <p id="loginInfo"></p>
    
        <button
          onClick={() => {
            sendData()
          }}
          className="btn btn-primary"
        >
          儲存
        </button>
    </form>
      </>
  )
  
return (
  <>
    <h3>訂單編輯</h3>
    <hr />
    {dataLoading ? loading : display}
  </>
)
    }

export default withRouter(OrderEdit)