import React from 'react';
import { Button } from 'native-base';

const Buttone = ({ mt, bg, color, children, onPress }) => {
    return (
        <Button
            w={'full'}
            height={'55'}
            mt={mt}
            rounded={'full'}
            bg={bg}
            _pressed={{
                bg: bg,
            }}
            _text={{
                color: color,
                fontWeight: 'bold',
            }}
            onPress={onPress}
        >
            {children}
        </Button>
    );
};

export default Buttone;
