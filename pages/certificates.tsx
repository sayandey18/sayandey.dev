import Container from 'components/Container';
import certdata from 'contents/CertificatesData';
import CertificateSection from 'components/CertificateSection';

export default function Certificates() {
  return (
    <Container
      title="Certificates – Sayan Dey"
      description="All the certificates that I have achieved are included here."
    >
      <div className="flex flex-col justify-center items-start max-w-[45rem] mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Certificates
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I've participated in many contests, webinar, courses and test and get
            certified in many skills. You can find the all certificates below.
          </p>
        </div>
        <CertificateSection certificate={certdata.certlist} />
      </div>
    </Container>
  );
}
