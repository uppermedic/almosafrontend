import { i18n, Link, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { truncate, strippedContent } from 'src/utils/helpers.js';

function BlogItem({ blog, t }) {
  const lang = i18n.language;

  return (
    <div className="item caro-card">
      <Link
        href={
          lang &&
          `/media-center/blog/post/${
            lang && String(blog[lang].title).split(' ').join('-')
          }?id=${blog.id}`
        }
      >
        <a>
          <img src={blog.thumbnail} alt="" srcSet="" />
          <div className="content">
            <h3>
              {truncate(
                strippedContent((lang && blog[lang].title) || 'No Data'),
                20,
                '......'
              )}
            </h3>
            <p>
              <Markdown>
                {truncate(
                  strippedContent((lang && blog[lang].content) || 'No Data'),
                  100,
                  '......'
                )}
              </Markdown>
            </p>
            <Link
              href={
                lang &&
                `/media-center/blog/post/${
                  lang && String(blog[lang].title).split(' ').join('-')
                }?id=${blog.id}`
              }
            >
              <a className="details_link">{t('read_more')}</a>
            </Link>
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
