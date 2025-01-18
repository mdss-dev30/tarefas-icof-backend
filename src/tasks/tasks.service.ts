import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  create(taskData: Partial<Task>) {
    const task = this.taskRepository.create(taskData);
    return this.taskRepository.save(task);
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: string) {
    return this.taskRepository.findOne({ where: { id } });
  }

  update(id: string, taskData: Partial<Task>) {
    return this.taskRepository.update(id, taskData);
  }

  remove(id: string) {
    return this.taskRepository.delete(id);
  }
}
