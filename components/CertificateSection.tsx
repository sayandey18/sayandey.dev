import Image from 'next/future/image';

export default function CertificateSection({ certificate }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {certificate.data.map((cert) => {
        return (
          <div key={cert.title} className="flex flex-col gap-2 bg-white shadow-md shadow-gray-200 rounded-lg p-3 md:flex-row md:items-center md:justify-between md:gap-4 dark:shadow dark:bg-black-charcoal">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Image
                  width={50}
                  height={50}
                  src={cert.orgLogo}
                  alt={cert.issuedBy}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base md:text-lg dark:text-gray-200">
                  {cert.title}
                </h3>
                <p className="text-xs text-blue-500 dark:text-gray-300">
                  <span className="font-medium text-gray-500">Issued by:</span>{' '}
                  {cert.issuedBy}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5 text-sm">
              <p className="text-sm text-gray-500">{cert.issuedDate}</p>
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-200 text-gray-900 font-medium rounded-md px-5 py-1.5 hover:bg-black hover:text-gray-100 dark:hover:bg-gray-600 transition duration-300"
              >
                View
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
