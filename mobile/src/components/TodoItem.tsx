import { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Checkbox, Text } from 'native-base';

import createBoxShadow from '../util/BoxShadow';


interface TodoItemProps {
    text: string
};

const TodoItem:FC<TodoItemProps> = (props) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <TouchableOpacity style={[styles.paper, styles.boxShadow]} onPress={handleChange}>
            <Checkbox isChecked={isChecked} value={'box'} onChange={handleChange}>
                <Text>
                    { props.text }
                </Text>
            </Checkbox>
        </TouchableOpacity>
    );
};

const boxShadow = createBoxShadow(0, 5, '#000', 0.34, 6.27, 10, '#000057');

const styles = StyleSheet.create({
    paper: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 7,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    boxShadow
});

export default TodoItem;