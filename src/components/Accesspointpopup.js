function Accesspointpopup({ data }) {
    return (
      <div className='popupdiv' >
        <img width="200px" height="200px"src="https://cdn0.centrecom.com.au/images/upload/0144368_0.jpeg" alt='routerimage'></img>
        <p>{data.OBJECTID}</p>
        <p>{data.Borough}</p><p>{data.Provider}</p><p>{data.Type}</p><p>{data.Activated}</p>
      </div>
    );
  }
  export default Accesspointpopup;