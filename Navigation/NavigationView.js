/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule NavigationView
 * @flow
 */
'use strict';

var React = require('react-native');
var NavigationContainer = require('./NavigationContainer');
var NavigationState = require('./NavigationState');
var {
  StyleSheet,
  View,
} = React;

var NavigationView = React.createClass({
  propTypes: {
    navigationState: NavigationState.NavigationStateShape.isRequired,
  },
  render: function() {
    return (
      <View
        style={this.props.style}>
        {this.props.navigationState.routes.map(this._renderRoute)}
      </View>
    );
  },
  _renderRoute: function(route, index) {
    var isSelected = index === this.props.navigationState.index;
    return (
      <View
        key={NavigationState.getKey(route)}
        pointerEvents={isSelected ? 'auto' : 'none'}
        style={[
          styles.navView,
          {opacity: isSelected ? 1 : 0},
        ]}>
        {this.props.renderRoute(route, index)}
      </View>
    );
  },
});

NavigationView = NavigationContainer.create(NavigationView);

var styles = StyleSheet.create({
  navView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

module.exports = NavigationView;
