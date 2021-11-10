import { i18n, withTranslation } from 'root/i18n';

function Card({ item }) {
  const { language } = i18n;

  return (
    <>
      <div className="card-wrapper text-center">
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: language ? item[language]?.content : ''
            }}
          />
        </p>
      </div>
    </>
  );
}

export default withTranslation('common')(Card);
