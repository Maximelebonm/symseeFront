import './actuScreen.css';
import { CardArticle } from '../../components/cardArticle/cardArticle';
import { HomeSlider } from '../../components/homeSlider/homeSlider';

export const ActuScreen = () => {
    
    const tabArticles = [
        {
        title : 'title',
        subtittle : 'subtitle',
        lines : [
            {
                titleLine : 'titleLine1',
                pictureLine : 'https://picsum.photos/id/15/300/300',
                subtitileLine : 'subtitleLine1',
                paraLine : 'paraline1'
            },
            {
                titleLine : 'titleLine2',
                pictureLine : 'https://picsum.photos/id/16/300/300',
                subtitileLine : 'subtitleLine2',
                paraLine : 'paraline2'
            }
        ]
        },
        {
            title : 'title',
            subtittle : 'subtitle',
            lines : [
                {
                    titleLine : 'titleLine1',
                    pictureLine : 'https://picsum.photos/id/15/300/300',
                    subtitileLine : 'subtitleLine1',
                    paraLine : 'paraline1'
                },
                {
                    titleLine : 'titleLine2',
                    pictureLine : 'https://picsum.photos/id/16/300/300',
                    subtitileLine : 'subtitleLine2',
                    paraLine : 'paraline2'
                }
            ]
            }
    ]
    return (
        <div id='actuScreenContainer'>
        <HomeSlider/>
        <h1 id='actuScreenTitle'>
            Les actualités du Symsee
        </h1>
            <section id="actuScreenArticlesContainer">
            <CardArticle title={'Article 1 du Symsee'} id={1}/>
            <CardArticle title={'les actions du symsee'} id={2}/>
            <CardArticle title={'ceci est un article'}/>
            <CardArticle title={'Ceci est un article avec un titre plus long'}/>
            <CardArticle title={'ceci est un article avec un titre beaucoup trop long par rapport a la carte pour voir comment il se met'}/>
            <CardArticle title={'test'}/>
            <CardArticle title={'test'}/>
            <CardArticle title={'test'}/>
            <CardArticle title={'test'}/>
            <CardArticle title={'test'}/>
            <CardArticle title={'test'}/>
            <CardArticle title={'test'}/>
            <CardArticle title={'test'}/>
                {/* {tabArticles.map((item)=>{
                    <CardArticle props={item}/>
                })} */}
            </section>
        </div>
    )
}