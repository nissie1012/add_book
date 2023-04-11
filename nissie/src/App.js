import './App.css';
export default function MyForm() {
  return (
    <>
  <div class="container">
    <div class="title">ADD BOOK</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
           
            <label type="text" placeholder="Enter Book Id" required> BOOK ID: <input name="myInput" /></label>
          </div>
          <div class="input-box">
         
            <label type="text" placeholder="Enter your usename" required>BOOK NAME: <input name="myInput" /></label>
          </div>
          <div class="input-box">
          
            <label type="text" placeholder="Enter your usename" required>AUTHOR: <input name="myInput" /></label>
          </div>
          <div class="input-box">
          
            <label type="text" placeholder="Enter your usename" required>PUBLISHER: <input name="myInput" /></label>
          </div>
         
        </div>
     
        <button type="submit" id="submitBtn" className="submitBtn">Submit</button>
       
      </form>
    </div>
  </div>
  
    </>
  );
}
