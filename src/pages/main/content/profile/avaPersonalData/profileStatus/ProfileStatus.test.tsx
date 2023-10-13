import React from 'react';
/*
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status="some new status" updateStatus={() => {
        }}/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe('some new status');
    });

    test('span should be displayed after creation ', () => {
        const component = create(<ProfileStatus status="some new status" updateStatus={() => {
        }}/>);
        const root = component.root;
        let span = root.findByType('span')
        // @ts-ignore
        expect(span).not.toBeNull();
    });


    test('input should not be displayed after creation ', () => {
        const component = create(<ProfileStatus status="some new status" updateStatus={() => {
        }}/>);
        const root = component.root;
        // @ts-ignore
        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });


    test('input should be displayed in editMode instead of span ', () => {
        const component = create(<ProfileStatus status="some new status" updateStatus={() => {
        }}/>);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        // @ts-ignore
        expect(input.props.value).toBe('some new status');
    });


    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="some new status" updateStatus={mockCallback}/>);

        const instance = component.getInstance();
        // @ts-ignore
        instance?.deactivateEditMode()
        // @ts-ignore
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
*/
