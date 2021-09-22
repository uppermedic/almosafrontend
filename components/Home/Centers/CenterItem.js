import { i18n, Link, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { truncate, strippedContent } from 'src/utils/helpers.js';

function CenterItem({ t, center }) {
  const lang = i18n.language;
  return (
    <div className="item caro-card">
      <Link href={lang && `/services/medical-centers/${center.id}`}>
        <a>
          <img src={center.ar.thumbnail} alt="" srcSet="" />
          <div className="content">
            <h3>
              {truncate(
                strippedContent((lang && center[lang].title) || 'No Data'),
                20,
                '......'
              )}
            </h3>
            <p>
              <Markdown>
                {truncate(
                  strippedContent((lang && center[lang].excerpt) || 'No Data'),
                  70,
                  '......'
                )}
              </Markdown>
            </p>
            <Link
              href={`/services/medical-centers/${
                lang && String(center[lang].title).split(' ').join('-')
              }?id=${center.id}`}
            >
              <a className="details_link">{t('read_more')}</a>
            </Link>
          </div>
        </a>
      </Link>
    </div>
  );
}
CenterItem.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(CenterItem);
