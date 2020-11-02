import React, { Component } from "react";
import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item";

import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem
          key={id}
          // title={title}
          // imageUrl={imageUrl}
          // size={size}
          // linkUrl={linkUrl}
          {...otherSectionProps}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

// into homepage
export default connect(mapStateToProps)(Directory);
