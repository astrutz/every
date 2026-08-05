/**
 * Defines a working experience (job)
 */
export interface Experience {
  title: string;
  company: string;
  href: string;
  tasks: string[];
  started: Date;
  ended: Date | null;
}
