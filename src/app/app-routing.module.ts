import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasAccountGuard } from './guards/has-account.guard';
import { HasAnsweredQuestionnaireGuard } from './guards/has-answered-questionnaire.guard';
import { HasNoAccountGuard } from './guards/has-no-account.guard';
import { HasNotAnsweredQuestionnaireGuard } from './guards/has-not-answered-questionnaire.guard';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
    canActivate: [HasNoAccountGuard, HasNotAnsweredQuestionnaireGuard]
  },
  {
    path: 'questions',
    loadChildren: () => import('./pages/question/question.module').then(m => m.QuestionModule),
    canActivate: [HasNoAccountGuard, HasNotAnsweredQuestionnaireGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
    canActivate: [HasAccountGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule),
    canActivate: [HasAnsweredQuestionnaireGuard, HasNoAccountGuard]
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./pages/show-qr-code/show-qr-code.module').then(m => m.ShowQrCodeModule),
    canActivate: [HasAccountGuard]
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsPageModule),
    canActivate: [HasAnsweredQuestionnaireGuard, HasNoAccountGuard]
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
