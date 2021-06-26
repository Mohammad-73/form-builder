import React from "react";

export default function Textarea(props) {
  const { item } = props;
  return (
    <div class="form-group">
      <label htmlFor="comment">{item.label}</label>
      <textarea className="form-control" rows="5" id={item.id}></textarea>
    </div>
  );
}
