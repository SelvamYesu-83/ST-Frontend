import React, { useState } from "react";
import "../../style/tickets/ticket-create.css"; // Import the CSS file

const Create = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedModule, setSelectedModule] = useState("");
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [requestName, setRequestName] = useState("");
  const [source, setSource] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="form-container">
      <form className="ticket-form">
        {/* Project Module & Module */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Projects Module<span>*</span>
            </label>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              <option>Select Project</option>
              <option>Sales Executive App</option>
              <option>PSMART Customer App</option>
              <option>Zoho Analytics</option>
              <option>Focuz ERP</option>
              <option>Customer Web</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              Module<span>*</span>
            </label>
            <select
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
            >
              <option>Select Module</option>
              <option>Module 1</option>
              <option>Module 2</option>
            </select>
          </div>
        </div>

        {/* Subject */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Subject<span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Priority & Category */}
          <div className="form-group">
            <label>
              Priority<span>*</span>
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>Select</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              Category<span>*</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select</option>
              <option>Bug</option>
              <option>Feature Request</option>
            </select>
          </div>
        </div>

        {/* Request Name & Source */}
        <div className="form-row">
          <div className="form-group">
            <label>Raised this request on behalf of</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={requestName}
              onChange={(e) => setRequestName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>
              Source<span>*</span>
            </label>
            <select value={source} onChange={(e) => setSource(e.target.value)}>
              <option>Select</option>
              <option>Email</option>
              <option>Phone</option>
              <option>Chat</option>
            </select>
          </div>
          {/* Due Date */}
          <div className="form-group">
            <label>
              Due Date<span>*</span>
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        {/* Problem Description */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Problem Description<span>*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* Attachment */}
        <div className="form-row">
          <div className="form-colomn">
            <div className="attach">
              <label>Attachment</label>
              <input type="file" />
            </div>
          </div>
          {/* Buttons */}
          <div className="button-group">
            <button type="button" className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
