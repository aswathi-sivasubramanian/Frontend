import Modal from 'react-bootstrap/Modal';
import "../App.css";
const  Processor = () => {
  const embedUrl = 'http://localhost:3000/d-solo/cf5fc6fb-63f5-43a3-9092-ecd5c535777a/new-dashboard?orgId=1&from=1683035593000&to=1683038592000&panelId=2" ';

  return (
    <div >
      <iframe
        src={embedUrl}
        width="100%" // Set to 100% width to fill the Modal
        height="100%" // Set to 100% height to fill the Modal
        title="Embedded Dashboard"
      />
    </div>
  );
};
function GrafanaOnMap({ show, handleClose }) {
    return (
      <>
      
  
        <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
          <Modal.Header closeButton>
            <Modal.Title>Grafana data </Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <Processor/>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default GrafanaOnMap;
  