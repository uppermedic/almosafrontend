import { i18n, Link, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { truncate, strippedContent } from 'src/utils/helpers.js';

function BlogItem({ t, team }) {
  const lang = i18n.language;
  return (
    <div className="item caro-card">
      <Link href={`/services/medical-centers/${team.id}`}>
        <a>
          <img src={team.image} alt="" srcSet="" />
          <div className="content-card">
            <h3>{lang && team[lang].name}</h3>
            <span>{lang && team[lang].title}</span>
          </div>
        </a>
      </Link>
    </div>
  );
}
BlogItem.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(BlogItem);
