import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../../actions/ModalActions";

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleHideModal = () => {
    history.push(`/boards/${modal.cardInfo.boardId}`);
    dispatch(hideModal());
  };

  if (!modal.visible) {
    return <div id="modal-container"></div>
  } else {
    return (
      <div id="modal-container">
        <div onClick={handleHideModal} className="screen"></div>
        <div id="modal">
        <i onClick={handleHideModal} className="x-icon icon close-modal"></i>
        <header>
            <i className="card-icon icon .close-modal"></i>
            <textarea className="list-title" style={{ height: "45px" }}>
              Cards do many cool things. Click on this card to open it and learn
              more...
            </textarea>
            <p>
              in list <a className="link">Stuff to try (this is a list)</a>
              <i className="sub-icon sm-icon"></i>
            </p>
          </header>
          <section className="modal-main">

          </section>
          <aside className="modal-buttons">
            <h2>Add</h2>
            <ul>
              <li className="member-button">
                <i className="person-icon sm-icon"></i>Members
              </li>
              <li className="label-button">
                <i className="label-icon sm-icon"></i>Labels
              </li>
              <li className="checklist-button">
                <i className="checklist-icon sm-icon"></i>Checklist
              </li>
              <li className="date-button not-implemented">
                <i className="clock-icon sm-icon"></i>Due Date
              </li>
              <li className="attachment-button not-implemented">
                <i className="attachment-icon sm-icon"></i>Attachment
              </li>
            </ul>
            <h2>Actions</h2>
            <ul>
              <li className="move-button">
                <i className="forward-icon sm-icon"></i>Move
              </li>
              <li className="copy-button">
                <i className="card-icon sm-icon"></i>Copy
              </li>
              <li className="subscribe-button">
                <i className="sub-icon sm-icon"></i>Subscribe
                <i className="check-icon sm-icon"></i>
              </li>
              <hr />
              <li className="archive-button">
                <i className="file-icon sm-icon "></i>Archive
              </li>
            </ul>
            <ul className="light-list">
              <li className="not-implemented">Share and more...</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
};

export default Modal;