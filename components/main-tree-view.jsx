import React, { PropTypes } from 'react'
import TreeView from 'react-treeview'
const dataSource = [
  ['Apple', 'Orange'],
  ['Facebook', 'Google'],
  ['Celery', 'Cheeseburger'],
];
const MainTreeView = React.createClass({
  getInitialState() {
    return {
      collapsedBookkeeping: dataSource.map(() => false)
    };
  },
  render () {
    return (
      <div style={{padding:'20px'}}>
        {dataSource.map((node, i) => {
          // Let's make it so that the tree also toggles when we click the
          // label. Controlled components make this effortless.
          const label =
            <span className="node">
              Type {i}
            </span>;
          return (
            <TreeView
              key={i}
              nodeLabel={label}>
              {node.map(entry => <div className="info" key={entry}>{entry}</div>)}
            </TreeView>
          );
        })}
      </div>
    )
  }
})

export default MainTreeView
