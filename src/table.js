function Table({dataList}) {
    return ( <div className="container">
<table className="table">
  <thead>
    <tr>
      <th scope="col">Ad-Soyad</th>
      <th scope="col">Email</th>
      <th scope="col">Yaş</th>
      <th scope="col">Eğitim Durumu</th>
      <th scope="col">Adres</th>
    </tr>
  </thead>
  <tbody>
      {
          dataList?.map((item,index)=>(
            <tr key={index}>
            <td>{item.nameSurname}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td>{item.education}</td>
            <td>{item.address}</td>
          </tr>
          ))
      }
  

  </tbody>
</table>
    </div> );
}

export default Table;