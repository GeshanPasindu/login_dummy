import React from 'react'
import Sidebar from '../components/Sidebar'
import './Dashboard.css'


const Dashboard = () => {
  return (
    <div>
     <Sidebar>
      <div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card" >
  <img src="https://media.istockphoto.com/id/1343711992/vector/young-woman-sitting-and-using-laptop-to-sell-products-online-with-order-packages-waiting-to.jpg?s=612x612&w=0&k=20&c=RFXzfixAbSXISxoQ8vSDrZ7vQbZl4IBsnG6PliKbpPo="
   class="card-img-top" style={{height:"160px"}} alt="..."/>
  <div class="card-body">
    <p class="card-text"><h2>Sellers</h2></p>
  </div>
</div>
    </div>

    <div class="col">
    <div class="card"  >
  <img src="https://litextension.com/blog/wp-content/uploads/2020/11/10-Future-Ecommerce-Trends-to-Lock-in-Customers-in-2021Artboard-2-770x513.png"
   class="card-img-top" style={{height:"160px"}} alt="..."/>
  <div class="card-body">
    <p class="card-text"><h2>Buyers</h2></p>
  </div>
</div>
    </div>

    <div class="col">
    <div class="card" >
  <img src="https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148509518.jpg?w=2000" 
  class="card-img-top" style={{height:"160px"}} alt="..."/>
  <div class="card-body">
    <p class="card-text"><h3>Delivery Partners</h3></p>
  </div>
</div>
    </div>

    <div class="col">
    <div class="card" >
  <img src="https://3677969429-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LdPzLtyP46oY7cyXnkw%2F-LkOGY6dVG7feESsFWMv%2F-LkOGcRiw8MHMQxhZgjd%2F5b5625ccc664ed6b0080bd74_commission-structure.jpg?alt=media&token=848dba8d-701b-48c1-a3b5-ec664906db52" 
  class="card-img-top" style={{height:"160px"}} alt="..."/>
  <div class="card-body">
    <p class="card-text"><h2>Commission</h2></p>
  </div>
</div>
    </div>

  </div>
</div>
</Sidebar>

    </div>
  )
}

export default Dashboard