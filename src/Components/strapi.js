import { useEffect, useState } from "react";

function Strapi() {
  const [strdata, setstrdata] = useState([]);
  const Strapidatafun = async () => {
    await fetch(
      "http://localhost:1337/api/flipkartelectronics?populate[electronicitems][populate]=*"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setstrdata(data.data[0].attributes.electronicitems);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    Strapidatafun();
  }, []);

  console.log("strdata------------------>", strdata);
  return (
    <div className="App">
      <div className="Strapidiv">
        <table
          className="square"
          style={{
            border: "1px solid green",
            background: "light grey",
            padding: 500,
            Spacing: 50,
          }}
        >
          <thead>
            {" "}
            <th>
              <div className="id">ID</div>
            </th>
            <th>
              <div className="title">TITLE</div>
            </th>
            <th>
              <div className="img">IMG</div>
            </th>
            <th>
              <div className="price">PRICE</div>
            </th>
            <th>
              <div className="id">DESCRIPTION</div>
            </th>
          </thead>
          {(strdata || []).map((ele, _index) => {
            return (
              <tbody key={_index}>
                <td>
                  <div className="id">{ele.id}</div>
                </td>
                <td>
                  <div className="title">{ele.title}</div>
                </td>
                <td>
                  <div className="img">
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={
                        "http://localhost:1337" + ele.img.data[0].attributes.url
                      }
                      alt={ele.img.data[0].attributes.name}
                    />
                  </div>
                </td>
                <td>
                  <div className="price">{ele.price}</div>
                </td>
                <td>
                  <div className="id">DESCRIPTION</div>
                </td>
              </tbody>
            );
          })}
        </table>
        ;
      </div>
    </div>
  );
}

export default Strapi;
