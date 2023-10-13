import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';



describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="some new status" updateStatus={()=>{}}/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe("some new status");
    });

    test("span containing correct status should be displayed after creation ", () => {
        const component = create(<ProfileStatus status="some new status" updateStatus={()=>{}}/>);
        const instance = component.getInstance();
        let span = instance?.findByType('span')
        // @ts-ignore
        expect(span.length).toBe(1);
    });

});
