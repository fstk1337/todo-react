import { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Checkbox, Text, Icon, IconButton, HStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

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
            <Checkbox isChecked={isChecked} value={'box'} onChange={handleChange} style={styles.checkbox}>
                <Text style={styles.text}>
                    { props.text }
                </Text>
            </Checkbox>
            <HStack space={0} justifyContent='space-between'>
                <IconButton size={'xs'} style={styles.button} icon={<Icon style={styles.icon} as={MaterialIcons} name='edit' size={4} color='gray.600' />} />
                <IconButton style={styles.button} icon={<Icon style={styles.icon} as={MaterialIcons} name='delete' size={4} color='gray.600' />} />
            </HStack>
        </TouchableOpacity>
    );
};

const boxShadow = createBoxShadow(0, 5, '#000', 0.34, 6.27, 10, '#000057');

const styles = StyleSheet.create({
    paper: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingLeft: 15,
        paddingRight: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 7,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    checkbox: {
        width: 15,
        height: 15,
    },
    text: {
        fontSize: 12
    },
    button: {
    },
    icon: {

    },
    boxShadow
});

export default TodoItem;