import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CPLTypesModule } from './modules/cpl-types/cpl-types.module';
import { ImplementedCollegesModule } from './modules/implemented-colleges/implemented-colleges.module';
import { CollegesModule } from './modules/colleges/colleges.module';
import { UiSettingsModule } from './modules/ui-settings/ui-settings.module';
import { PotentialSavingsModule } from './modules/potential-savings/potential-savings.module';
import { IndustryCertificationsModule } from './modules/industry-certifications/industry-certifications.module';
import { CPLLearningModesModule } from './modules/cpl-learning-modes/cpl-learning-modes.module';
import { EmailModule } from './modules/email/email.module';
import { CPLRequestModule } from './modules/cpl-request/cpl-request.module';
import { CPLCoursesModule } from './modules/cpl-courses/cpl-courses.module';
import { CPLInquiryModule } from './modules/cpl-inquiry/cpl-inquiry.module';
import { SendCPLRequestModule } from './modules/send-cpl-request/send-cpl-request.module';
import { MostCommonTopcodesModule } from './modules/most-common-topcodes/most-common-topcodes.module';
import { MostCommonCrsModule } from './modules/most-common-crs/most-common-crs.module';
import { MostCommonCidsModule } from './modules/most-common-cids/most-common-cids.module';
import { CPLArticulationsModule } from './modules/cpl-articulations/cpl-articulations.module';

@Module({
  imports: [
    CPLTypesModule,
    ImplementedCollegesModule,
    CollegesModule,
    UiSettingsModule,
    PotentialSavingsModule,
    IndustryCertificationsModule,
    CPLLearningModesModule,
    EmailModule,
    CPLRequestModule,
    CPLCoursesModule,
    CPLInquiryModule,
    SendCPLRequestModule,
    MostCommonTopcodesModule,
    MostCommonCrsModule,
    MostCommonCidsModule,
    CPLArticulationsModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
