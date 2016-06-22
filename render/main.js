import React from 'react';
import ReactDOM from 'react-dom';

import MainTreeView from '../components/main-tree-view.jsx'
import MainAlertChart from '../components/main-alert-chart.jsx'
import MainAlertList from '../components/main-alert-list.jsx'

ReactDOM.render(<MainTreeView />, document.getElementById('J_LeftTree'));
ReactDOM.render(<MainAlertChart />, document.getElementById('J_AlertChart'));
ReactDOM.render(<MainAlertList />, document.getElementById('J_AlertList'));
