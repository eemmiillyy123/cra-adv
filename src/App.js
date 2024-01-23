

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <span className="navbar-brand">甜點蛋糕店</span>
            <button className="btn btn-outline-dark position-relative" type="submit">
              購物車<span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">9</span></button>
        </div>
      </nav>
      <div className="container mt-4">
        {/*外層格線*/}
        <div className="row">
          <div className="col-md-7">
            <div className="row row-cols-3 g-3">
              <div className="col">
                <div className="card" >
                  <img src="https://images.unsplash.com/photo-1682685797140-c17807f8f217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h6 className="card-title">全蔬食健康餐
                      <span className="float-end">NT$20</span>
                    </h6>
                    <button  className="btn btn-outline-primary w-100" type="button">購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" >
                  <img src="https://images.unsplash.com/photo-1682685797140-c17807f8f217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h6 className="card-title">全蔬食健康餐
                      <span className="float-end">NT$ 20</span>
                    </h6>
                    <button  className="btn btn-outline-primary w-100" type="button">購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" >
                  <img src="https://images.unsplash.com/photo-1682685797140-c17807f8f217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h6 className="card-title">全蔬食健康餐
                      <span className="float-end">NT$ 20</span>
                    </h6>
                    <button  className="btn btn-outline-primary w-100" type="button">購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" >
                  <img src="https://images.unsplash.com/photo-1682685797140-c17807f8f217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h6 className="card-title">全蔬食健康餐
                      <span className="float-end">NT$ 20</span>
                    </h6>
                    <button  className="btn btn-outline-primary w-100" type="button">購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bg-light p-3">
            <table className="table align-middle">
                <tbody>
                  <tr>
                    <td>
                      <a  href="#">x</a>
                    </td>
                    <td>
                      <img src="" alt=""/>
                    </td>
                    <td>全蔬食健康餐
                      <br/>
                      <small className="text-muted">NT$ 220</small>
                    </td>
                    <td>
                      <select name="" id="" className="form-select"></select>
                    </td>
                    <td className="text-end">
                      NT$ 224
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-end">
                      總金額 NT$ 440
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
