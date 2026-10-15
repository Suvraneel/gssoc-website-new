import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useId } from "react";
const ProjectModal = ({ currProject }) => {
  const titleId = useId();
  return (
    <div className="w-full absolute bottom-0">
      <Dialog.Root
        lazyMount
        unmountOnExit
        scrollBehavior="inside"
      >
        <Dialog.Trigger asChild>
          <button
            className=" bg-linear-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium rounded-b-md py-1 hover:bg-linear-to-t hover:from-primary_orange-0 hover:to-orange-600 w-full"
          >
            Project Details
          </button>
        </Dialog.Trigger>
        <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
        <Dialog.Content maxW="4xl" textStyle="md" aria-labelledby={titleId} className="dark:bg-darkmode_gray-0 h-96">
          <Dialog.Header id={titleId} py={4} gap={0} textStyle="xl" fontWeight="semibold" className="flex items-center text-primary_orange-0">
            <a
              target="_blank"
              rel="noreferrer"
              href={currProject.project_link || currProject.github || "https://github.com/" + currProject.repo_fullname}>
              {currProject.project_name}
            </a>
            <p className="ml-4 text-base">
              By {currProject.owner_name}
            </p>
          </Dialog.Header>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
          <Dialog.Body pb={2}>
            <div className="flex flex-row justify-between px-6">
              <a
                target="_blank"
                rel="noreferrer"
                href={currProject.project_link || currProject.github || "https://github.com/" + currProject.repo_fullname}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="w-10 h-10 text-black dark:text-white "
                    icon={faGitAlt}
                  />
                  <p className="ml-2 font-serif font-medium text-base text-justify text-black dark:text-white">
                    Repository Link
                  </p>
                </div>
              </a>
              <div>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" color="orange" />
                </Dialog.CloseTrigger>
              </div>
            </div>
            <div className="flex flex-col px-6 mt-5">
              <p className="text-primary_orange-0 font-semibold font-serif text-lg">
                Description
              </p>
              <p className="font-serif text-base dark:text-white">
                {currProject.project_description}
              </p>
            </div>
          </Dialog.Body>
        </Dialog.Content>
        </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  );
};

export default ProjectModal;
