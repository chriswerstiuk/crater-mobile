import { getError } from '@/constants';

export const validate = values => {
    const errors = {};
    const {
        name,
        description,
        quantity,
        discount_type,
        price,
        discount
    } = values;

    errors.name = getError(name, ['requiredField']);

    errors.quantity = getError(
        quantity,
        ['requiredField', 'minNumberRequired', 'isNumberFormat'],
        (options = { fieldName: 'quantity', minNumber: 0 })
    );

    errors.price = getError(
        price,
        ['requiredField', 'minNumberRequired', 'isNumberFormat'],
        (options = { fieldName: 'price', minNumber: 0 })
    );

    if (discount_type !== 'none') {
        errors.discount = getError(
            discount,
            ['minNumberRequired', 'isNumberFormat'],
            (options = { fieldName: 'discount', minNumber: 0 })
        );
    }

    errors.discount_type = getError(discount_type, ['required']);

    return errors;
};
