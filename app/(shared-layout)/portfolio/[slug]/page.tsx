import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Hero from '@/components/Portfolio/Hero';
import ProjectDetails from '@/components/Portfolio/ProjectDetails';
import Cta from '@/components/Cta';
import Contact from '@/components/Contact';

import { projects } from '@/data/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const project = projects.find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  const { title, subTitle: description, image, slug } = project;
  const ogImage = image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://the-folio.vercel.app/portfolio/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Hero project={project} />
      <ProjectDetails project={project} />
      <Cta
        variant="default"
        title="Ready to Collaborate?"
        description="Join me on a journey where creativity knows no bounds. Let's explore the limits of digital art together."
      />
      <Contact />
    </>
  );
}
