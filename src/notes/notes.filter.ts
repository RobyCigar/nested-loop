import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class NotesFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
