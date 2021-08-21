import { Controller, Get } from '@nestjs/common';
import { ApiSecurity, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Square')
@Controller('square')
export class SquareController {

  @Get('/')
  @ApiSecurity('withCookie')
  @ApiOperation({ summary: 'Square operation' })
  square() {
    return 'square! ';
  }
}
