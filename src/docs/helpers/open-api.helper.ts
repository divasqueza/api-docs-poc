import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { OpenApiConfiguration } from '../configuration/open-api.configuration';

export class OpenApiHelper {
  static buildSwaggerJson(app: INestApplication) {
    let documentBuilder = new DocumentBuilder().setTitle(
      OpenApiConfiguration.getApiTitle(),
    );
    if (OpenApiConfiguration.getApiDescription()) {
      documentBuilder = documentBuilder.setDescription(
        OpenApiConfiguration.getApiDescription(),
      );
    }
    if (OpenApiConfiguration.getPackageVersion()) {
      documentBuilder = documentBuilder.setVersion(OpenApiConfiguration.getPackageVersion());
    }
    documentBuilder.setLicense(
      'CONFIDENTIAL - GREATMINDS DIGITAL PLATFORMS TEAM ONLY - DO NOT SHARE',
      null,
    );

    documentBuilder.addTag(
      'Square',
      'Square related operations',
      {
        url: 'https://www.example.com/docs/health',
        description: 'Detailed information about square operations',
      }
    );

    documentBuilder.addTag(
      'Health',
      'Health related operations',
      {
        url: 'https://www.example.com/docs/health',
        description: 'Detailed information about health operations',
      }
    );

    documentBuilder.addServer(
      OpenApiConfiguration.getEnvironmentUrl(),
      'Server for current environment',
    );

    documentBuilder.setContact(
      'API Support',
      'https://www.example.com/support',
      'support@example.com'
    );

    documentBuilder.setExternalDoc(
      'External doc with more information about the API',
      'https://greatminds.atlassian.net/wiki/spaces/DP/pages/2062189731/License+API+documentation+proposal'
    );

    
    documentBuilder.addSecurity('withCookie', {
      type: 'apiKey',
      description: 'This service requires a cookie `user` that has the...',
      in: 'cookie',
      name: 'user',
    });
    
    return SwaggerModule.createDocument(app, documentBuilder.build());
  }
}
