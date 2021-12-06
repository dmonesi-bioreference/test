import { renderWithShell } from 'test-utils';

import { LandingPage } from './LandingPage';

describe('The home page', () => {
  it('does not explode', async () => {
    await renderWithShell(<LandingPage />);
  });

  describe('results section', () => {
    it("features the child's name", async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText("Child's name");
      await page.findByText('Lisa Consuela Jackson');
    });

    it('has test result updates', async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText('Test in process');
      await page.findByText('Expect results in 7-10 days');
      await page.findByText('Timing may vary');
      await page.findByText('Everything is on track');
      await page.findByText('No updates since your last login');
    });

    it('has a CTA to see more about results', async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText('Receive progress updates');
      await page.findByText('See where you are in the process');
    });
  });

  describe('resources section', () => {
    it('has a title and copy', async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText('Resources');
      await page.findByText('(In the NICU)');
      await page.findByText(
        'How other parents have coped with this time of uncertainty.'
      );
      await page.findByText(
        'They said it was supposed to be the most wonderful experience of my life.'
      );
      await page.findByText('Real family story');
      await page.findByText('Read Story');
    });

    it('has a FAQ section', async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText('NICU FAQs');
      await page.findByText('How do I care for my baby after the NICU?');
      await page.findByText(
        "What happens if my child doesn't get a diagnosis?"
      );
      await page.findByText('Can I still have more children?');
      await page.findByText('View all');
    });
  });

  describe('care team section', () => {
    it('has a header, copy, and calls to action', async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText('Care team');
      await page.findByText('Call');
      await page.findByText('Talk to a Genetic Counselor');
      await page.findByText(
        'Find peace of mind and get your burning questions answered'
      );
      await page.findByText("Starting today, we're here for you");
      await page.findByText('Learn about genetic counselling');
    });
  });

  describe('science section', () => {
    it('has a title subsection titles', async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText('The science');
      await page.findByText('101 on Genetics');
      await page.findByText('Whole Genome Sequencing');
    });
  });
});
