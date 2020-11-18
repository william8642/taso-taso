import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'


function ClassAdd(props) {
  const [act_title, setAct_title] = useState('')
  const [date, setDate] = useState('')
  const [city, setCity] = useState('')
  const [view_place, setView_place] = useState('')
  const [title, setTitle] = useState(0)
  const [sub_title, setSub_title] = useState('')
  const [act_members, setAct_members] = useState()
  const [photoFormdata, setphotoFormdata] = useState('')
  const [pic_big, setPic_big] = useState()

  const AddClass = async () => {
    const newData = {
      act_title,
      date,
      city,
      view_place,
      title,
      sub_title,
      act_members,
      pic_big: '' + pic_big,
    }
    const res = await fetch('http://localhost:3000/seller/ClassAdd', {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    console.log(JSON.stringify(newData))

    const data = await res.json()
    console.log(data)
    await fetch('http://localhost:3000/seller/upload-classphoto', {
      method: 'POST',
      body: photoFormdata,
    })
    props.history.push('/ClassData')
  }

  const uploadPhoto = (e) => {
    let file = e.target.files[0]
    let photoName = file.name
    const photo = new FormData()
    photo.append('pic_big', file)
    setphotoFormdata(photo)
    setPic_big(photoName)
  }

    //快速輸入-課程
    function fastClassAdd(){
      setAct_title('一起來找茶！2020世界茶業博覽會 精選100款有機好茶，體驗難得的封茶盛會')
      setDate('2020-11-28')
      setCity('台東縣')
      setView_place('東河鄉')
      setTitle('台灣茶葉北中南各具特色，品質享譽全球，很多愛茶人士上山入鄉，就為了尋訪心目中的一杯好茶。若無法親至各茶區，10月9日～10月18日舉辦、匯集全台各地不同茶款的茶業博覽會。')
      setSub_title('每年吸引數十萬人的「世界茶業博覽會」，今年於10月9日至18日，在南投中興新村與愛茶人士見面。其中，「有機茶主題館」將會看到茶為何堪稱為「台灣的禮物」，又如何賦予茶本身所帶來的永續價值。')
      setAct_members('70')

    }
  const display = (
    <>
 

    <div className="container">
        <h3>新增課程</h3>
       <hr />
      </div>
      <form>
      <div className="form-group">
        <input type="checkbox" id="fastinput" onClick={fastClassAdd}/>
        <label className="form-check-label" htmlFor="fastinput">
          快速輸入
        </label>
      </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">課程名稱</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="請輸入名稱"
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
            placeholder="請輸入日期"
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
            placeholder="請輸入地區"
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
            placeholder="請輸入地點"
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
            placeholder="請輸入內容"
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
            placeholder="請輸入描述"
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
            placeholder="請輸入最多人數"
            value={act_members}
            onChange={(e) => {
              setAct_members(e.target.value)
            }}
          />
        </div>

        <form name="photo">
          <div class="form-group">
            <label for="exampleFormControlInput5">圖片路徑</label>
            <input
              name="pic_big"
              type="file"
              class="form-control"
              id="exampleFormControlInput5"
              placeholder="請上傳圖片"
              accept=".jpg,.jpeg,.png"
              onChange={uploadPhoto}
            />
            <img
              style={
                pic_big
                  ? {
                    height: '160px',
                    width: '160px',
                  }
                  : {}
              }
              src={'http://localhost:3001/img/CourseList/' + pic_big}
              alt=""
            />
          </div>
        </form>
      </form>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          AddClass()
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
export default withRouter(ClassAdd)
