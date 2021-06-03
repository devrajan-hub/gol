import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import {setPeriodDialog} from '../../../actions/adminAction';
import { setPeriodDialog } from '../../actions/adminAction'
import { Modal, Button } from "react-bootstrap";

const SelectPeriod = ({setPeriodDialog}) =>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="transparent-bg" variant="primary" onClick={handleShow}>
         Select Period
      </Button>

      <Modal show={show} onHide={handleClose} className="slctperiodpopup">
        <Modal.Header className="headerblock">
          <Modal.Title>Select the end date of the free period</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <select class="form-select selectpicker" aria-label="Default select example">
                  <option selected>Year</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-4">
                <select class="form-select selectpicker" aria-label="Default select example">
                  <option selected>Month</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-4">
                <select class="form-select selectpicker" aria-label="Default select example">
                  <option selected>Day</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-gradient" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          <Button className="btn-closed" variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

SelectPeriod.propTypes = {
	setPeriodDialog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    setPeriodDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPeriod);
