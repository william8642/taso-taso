import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

function ClassEdit(props) {
  const [myData, setMydata] = useState([])
  const sid = props.match.params.sid
  const [act_title, setAct_title] = useState('')
  const [date, setDate] = useState('')
  const [city, setCity] = useState('')
  const [view_place, setView_place] = useState('')
  const [title, setTitle] = useState(0)
  const [sub_title, setSub_title] = useState('')
  const [act_members, setAct_members] = useState()
  const [pic_big, setPic_big] = useState('')
  const [photoFormdata, setphotoFormdata] = useState('')
  const [editpic_big, seteditPic_big] = useState()

  const getproductData = async (sid) => {
    const res = await fetch('http://localhost:3000/seller/ClassData/' + sid, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const data = await res.json()
    setMydata(data)

    // const [act_title, setAct_title] = useState('')
    // const [city, setCity] = useState('')
    // const [view_place, setView_place] = useState('')
    // const [title, setTitle] = useState(0)
    // const [text, setText] = useState('')
    // const [act_members, setAct_members] = useState()
    // const [pic_carousel, setPic_carousel] = useState('')
    setAct_title(data[0].act_title)
    setCity(data[0].city)
    setView_place(data[0].view_place)
    setTitle(data[0].title)
    setSub_title(data[0].setSub_title)
    setAct_members(data[0].act_members)
    setPic_big(data[0].pic_big)
  }
  const uploadPhoto = (e) => {
    let file = e.target.files[0]
    let photoName = file.name
    const photo = new FormData()
    photo.append('pic_big', file)
    setphotoFormdata(photo)
    seteditPic_big(photoName)
    console.log(photoName)
  }
  const imgdisplay = editpic_big ? (
    <img
      style={
        pic_big
          ? {
            height: '160px',
            width: '160px',
          }
          : {}
      }
      src={"http://localhost:3001/img/CourseList/" + editpic_big}
      alt=""
    />
  ) : (
      <img
        style={
          pic_big
            ? {
              height: '160px',
              width: '160px',
            }
            : {}
        }
        src={"http://localhost:3001/img/CourseList/"+ pic_big}
        alt=""
      />
    )

  const updateData = async () => {
    const newData = {
      act_title,
      date,
      city,
      view_place,
      title,
      sub_title,
      act_members,
      pic_big: '' + editpic_big,
    }
    const res = await fetch('http://localhost:3000/seller/ClassEdit/' + sid, {
      method: 'post',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const data = res.json()
    alert('修改成功')
    props.history.push('/ClassData')
  }

  useEffect(() => {
    getproductData(sid)
  }, [])
  const display = (
    <>
    <div className="container">
        <h3>課程修改</h3>
       <hr />
      </div>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">課程名稱</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="請輸入課程名稱"
            value={act_title}
            onChange={(e) => {
              setAct_title(e.target.value)
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput2">開課日期</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="請輸入開課日期"
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput3">課程地區</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput3"
            placeholder="請輸入課程地區"
            value={city}
            onChange={(e) => {
              setCity(e.target.value)
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput4">課程地點</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput4"
            placeholder="請輸入課程地點"
            value={view_place}
            onChange={(e) => {
              setView_place(e.target.value)
            }}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput4">課程內容</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput4"
            placeholder="請輸入課程內容"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput4">課程描述</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput4"
            placeholder="請輸入課程描述"
            value={sub_title}
            onChange={(e) => {
              setSub_title(e.target.value)
            }}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput4">課程最多人數</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput4"
            placeholder="請輸入課程最多人數"
            value={act_members}
            onChange={(e) => {
              setAct_members(e.target.value)
            }}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput5">圖片路徑 </label>
          <input
            type="file"
            class="form-control"
            id="exampleFormControlInput5"
            placeholder="上傳圖片"
            onChange={uploadPhoto}
          />
          {imgdisplay}
        </div>
      </form>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          updateData()
        }}
      >
        送出
      </button>
    </>
  )
  return (
    <>
      <div className="container">{display}</div>
    </>
  )
}
export default withRouter(ClassEdit)
