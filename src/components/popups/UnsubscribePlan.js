import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { unsubscribePlanDialog } from '../../actions/accountAction';
import { Modal, Button } from "react-bootstrap";

const UnsubscribePlan = ({setPeriodDialog}) =>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="transparent unsubscribe-btn" variant="primary" onClick={handleShow}>
        Unsubscribe
      </Button>

      <Modal show={show} onHide={handleClose} className="slctperiodpopup accountsetting">
        <Modal.Header className="headerblock">
          <Modal.Title>Are you sure you want to cancel your subscription?</Modal.Title>
        </Modal.Header>
        <Modal.Body>If canceled, the subscription will last until the last day of the paid period</Modal.Body>
        <Modal.Footer>
          <Button className="btn-gradient" variant="primary" onClick={handleClose}>
            Yes, cancel subscription
          </Button>
          <Button className="btn-closed" variant="secondary" onClick={handleClose}>
            No, close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

UnsubscribePlan.propTypes = {
	unsubscribePlanDialog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    unsubscribePlanDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(UnsubscribePlan);
