// @flow

import * as React from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import compose from 'recompose/compose';
import "./styles/style.css"

export type Props = {
    media?: Array<{
        displayImage: string,
        id?: string,
        postLink?: string,
        accessibilityCaption?: string,
    }>,
    account: string,
    classes: { [$Keys<$Call<typeof styles>>]: string },
    status: 'completed' | 'loading' | 'failed',
};

const InstaFeed = ({ classes, media, account, status}: Props) => {
    return (
        <Grid container spacing={2} >
            {media &&
            status === 'completed' &&
            media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
                <Grid item xs={6} sm={3} key={id || displayImage} >
                    <ButtonBase
                        href={postLink || `https://www.instagram.com/${account}/`}
                    >
                        <img
                            src={displayImage}
                            alt={accessibilityCaption || 'Instagram picture'}
                            className={"instaImage"}
                        />
                    </ButtonBase>
                </Grid>
            ))}
            {status === 'loading' && <p>loading...</p>}
            {status === 'failed' && <p>Check instagram here</p>}
        </Grid>
    );
};

InstaFeed.defaultProps = {
    media: undefined,
};

export default compose(
    withInstagramFeed,
)(InstaFeed);