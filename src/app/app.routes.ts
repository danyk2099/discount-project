import { Routes } from '@angular/router';
import { DataView } from './components/data-view/data-view';
import { AnalysisView } from './components/analysis-view/analysis-view';
import { MonitorView } from './components/monitor-view/monitor-view';

export const routes: Routes = [
    { path: 'data', component: DataView },
    { path: 'analysis', component: AnalysisView },
    { path: 'monitor', component: MonitorView },
    { path: '**', redirectTo: '' }
];
