import { FC, Fragment, ReactElement } from "react";
import { BlogDetailsTypes } from "../../blogs/common-types";
import { EmptyOrError } from "../styled-components/empty-or-error/empty-or-error";
import { Loading } from "../styled-components/loding/loading";

interface HandleLoadingEmptyErrorStateTypes {
    children: ReactElement;
    data: BlogDetailsTypes[] | BlogDetailsTypes | undefined,
    isLoading: boolean,
    error: unknown
}

/**
 * This component is responsible to handle empty,error,loading stages for the components.It is a wrapper component.
 * @params children
 * @params data
 * @params isLoading
 * @params error
 * @returns ReactElement
 */
export const HandleLoadingEmptyErrorState: FC<HandleLoadingEmptyErrorStateTypes> = ({
    children,
    data,
    isLoading,
    error }): ReactElement => {

    if (isLoading) return <Loading area-label='Data is loading'>Loading...</Loading>;

    if (error) {
        return <EmptyOrError area-label='error occurred while making api call'>An error has occurred</EmptyOrError>
    }

    if (!data) {
        return <EmptyOrError color="black" area-label='No data available'>No data available</EmptyOrError>
    }

    return (<Fragment>
        {children}
    </Fragment>)
};