import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '@interfaces/task.interface';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  public transform(tasks: Task[], text: string): Task[] {
    if (!text){
     return tasks;
   }
    return tasks.filter((task: Task) => {
        return `${task.task.toLowerCase()}`.includes(text.toLowerCase());
    });
  }

}
