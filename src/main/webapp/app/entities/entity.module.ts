import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DatahubRepoRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { DatahubRepoCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { DatahubRepoLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { DatahubRepoDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { DatahubRepoTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { DatahubRepoEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { DatahubRepoJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { DatahubRepoJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
  imports: [
    DatahubRepoRegionMySuffixModule,
    DatahubRepoCountryMySuffixModule,
    DatahubRepoLocationMySuffixModule,
    DatahubRepoDepartmentMySuffixModule,
    DatahubRepoTaskMySuffixModule,
    DatahubRepoEmployeeMySuffixModule,
    DatahubRepoJobMySuffixModule,
    DatahubRepoJobHistoryMySuffixModule
    /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatahubRepoEntityModule {}
