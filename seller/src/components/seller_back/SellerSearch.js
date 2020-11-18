  
import Container from 'react-bootstrap/Container'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import '../../style/55.css'


function SellerSearch(props) {
const { getData, setOption, Option, setInputSearch, inputSearch,} = props

const onChange = (e) => {
    setOption(e.target.value)
  }




 return(
  <Container>

<div class="shop_list-search"> 
<h6>搜尋</h6>
<span
            onClick={() => {
              getData()
            }}
          >
          </span>
          <input
            type="text"
            placeholder="Search"
            value={inputSearch}
            
            onChange={(e) => {
              setInputSearch(e.target.value)
            }}
          />
          
<h6>包裹狀態篩選</h6>
            <select  onChange={onChange} value={Option} class="shop_list-order">
            <option value="0">顯示全部</option>
            <option value="1">尚未付款</option>
            <option value="2">處理中</option>
            <option value="3">待收貨</option>
            <option value="4">已完成</option>
            <option value="5">已取消</option>       
          </select>
          <h6>出貨時間排序</h6>    
          <select  onChange={onChange} value={Option} class="shop_list-order">
          <option value="6">顯示全部</option>
            <option value="7">出貨時間由近到遠</option>
            <option value="8">出貨時間由遠到近</option>

          </select>
        </div>
      </Container>
 )
        }
        export default SellerSearch