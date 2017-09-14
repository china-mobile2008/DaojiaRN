/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ContentText from '../ContentText'
import IconHelper from '../IconHelper'
export default class MoneyItem extends Component {
  render() {
    let item = this.props.item
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.moneyItemWrapper}>

          <View style={styles.itemText}>
            {
              item.flagText ?
                <View style={[styles.flagWrapper, {backgroundColor: item.flagColor}]}>
                  <Text style={styles.flagText}>{item.flagText}</Text>
                </View> : null
            }

            <ContentText>
              {item.name}
            </ContentText>

            {item.childMoneyList && item.childMoneyList.length > 0 ? <IconHelper {...item}></IconHelper> : null}
          </View>
          <ContentText style={{color: item.color}}>{item.value}</ContentText>
        </View>

        {/* 描述文案 */}
        {item.distanceFreightDesc ? <ContentText style={styles.freightDesc}>{item.distanceFreightDesc}</ContentText> : null}
        {item.periodFreightDesc ? <ContentText style={styles.freightDesc}>{item.periodFreightDesc}</ContentText> : null}
        {item.dynamicFreightDesc ? <ContentText style={styles.freightDesc}>{item.dynamicFreightDesc}</ContentText> : null}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  moneyItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemText: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  flagWrapper: {
    borderRadius: 2,
    padding:2,
    marginRight: 4,
  },
  flagText: {
    fontSize: 10,
    color: '#fff',
  },
  freightDesc: {
    fontSize: 11,
    color: '#999',
    paddingTop: 5,
    lineHeight: 11,
  }
});
