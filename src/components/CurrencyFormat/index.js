import { formatMoney } from '@/constants';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles, SymbolStyle } from './styles';

type IProps = {
    style: Object,
    amount: String,
    currency: Object,
    preText: String,
    containerStyle: Object,
    currencyStyle: Object
};
export class CurrencyFormat extends Component<IProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            style,
            amount,
            currency,
            preText,
            containerStyle,
            currencyStyle,
            moneyStyle
        } = this.props;
        const { symbol, money } = formatMoney(amount, currency);
        return (
            <View style={[styles.container, containerStyle && containerStyle]}>
                <Text numberOfLines={1} style={style && style}>
                    {preText && preText}
                </Text>
                <Text
                    numberOfLines={1}
                    style={[
                        style && style,
                        currencyStyle && currencyStyle,
                        SymbolStyle
                    ]}
                >
                    {symbol}{' '}
                </Text>
                <Text numberOfLines={1} style={[style, moneyStyle]}>
                    {money}
                </Text>
            </View>
        );
    }
}
