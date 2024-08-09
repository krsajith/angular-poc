import { Routes } from '@angular/router';
import { TestSignalComponent } from './test-signal/test-signal.component';
import { InnerScrollComponent } from './inner-scroll/inner-scroll.component';
import { OuterScrollComponent } from './outer-scroll/outer-scroll.component';

export const routes: Routes = [
    {
        path: 'route-test/:variable',
        component:TestSignalComponent

    },
    {
        path: 'inner-scroll',
        component:InnerScrollComponent

    },
    {
        path: 'outer-scroll',
        component:OuterScrollComponent

    },
];
