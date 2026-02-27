import { Injectable } from '@angular/core';
import { Work } from '../types/work.type';
import { Testimonial } from '../types/testimonial.type';
import { Experience } from '../types/experience.type';
import { Social } from '../types/social.type';
import { Skill } from '../types/skill.type';
import { skills } from '../data/skills.data';
import { experiences } from '../data/experiences.data';
import { works } from '../data/works.data';
import { testimonials } from '../data/testimonials.data';
import { socials } from '../data/socials.data';

/**
 * Provides the data files from `data/` as a typed public getter for guarding purposes
 */
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public get skills(): Skill[] {
    return skills;
  }

  public get experiences(): Experience[] {
    return experiences;
  }

  public get works(): Work[] {
    return works;
  }

  public get testimonials(): Testimonial[] {
    return testimonials;
  }

  public get socials(): Social[] {
    return socials;
  }
}
